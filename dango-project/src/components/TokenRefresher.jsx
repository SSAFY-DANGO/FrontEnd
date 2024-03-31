import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TokenRefresher() {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshAPI = axios.create({
      baseURL: import.meta.env.VITE_APP_GENERATED_SERVER_URL,
      headers: { 'Content-Type': 'application/json' }, // header의 Content-Type을 JSON 형식의 데이터를 전송한다
    });

    const interceptor = axios.interceptors.response.use(
      // 성공적인 응답 처리
      (response) => {
        // console.log('Starting Request', response)
        return response;
      },
      async (error) => {
        const originalConfig = error.config; // 기존에 수행하려고 했던 작업
        const msg = error.response.data.msg; // error msg from backend
        const status = error.response.status; // 현재 발생한 에러 코드
        // access_token 재발급
        if (status === 401) {
          if (msg == 'Expired Access Token. 토큰이 만료되었습니다') {
            // console.log("토큰 재발급 요청");

            const accessToken = JSON.parse(
              localStorage.getItem('loginUser')
            ).accessToken;
            const refreshToken = JSON.parse(
              localStorage.getItem('loginUser')
            ).refreshToken;
            await axios
              .post(
                `https://j10a702.p.ssafy.io/api/users/reissue`,
                {},
                {
                  headers: {
                    Authorization: accessToken,
                    'Refresh-Token': refreshToken,
                  },
                }
              )
              .then((res) => {
                // console.log("res : ", res);
                // 새 토큰 저장
                
                let user = JSON.parse(localStorage.getItem('loginUser'));
                user.accessToken = res.data.data.accessToken;
                user.refreshToken = res.data.data.refreshToken;
                localStorage.setItem('loginUser', JSON.stringify(user));
                // localStorage.setItem(
                //   'Authorization',
                //   res.data.data.accessToken
                // );
                // localStorage.setItem('Refresh', res.data.data.refreshToken);

                // 새로 응답받은 데이터로 토큰 만료로 실패한 요청에 대한 인증 시도 (header에 토큰 담아 보낼 때 사용)
                originalConfig.headers['authorization'] =
                  'Bearer ' + res.headers.authorization;
                originalConfig.headers['refresh'] = res.headers.refresh;

                // console.log("New access token obtained.");
                // 새로운 토큰으로 재요청
                return refreshAPI(originalConfig);
              })
              .catch(() => {
                console.error(
                  'An error occurred while refreshing the token:',
                  error
                );
              });
          }
          // refresh_token 재발급과 예외 처리
          // else if(msg == "만료된 리프레시 토큰입니다") {
          else {
            localStorage.clear();
            navigate('/');
            // window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.")
          }
        } else if (status == 400 || status == 404 || status == 409) {
          // window.alert(msg);
          // console.log(msg)
        }
        // console.error('Error response:', error);
        // 다른 모든 오류를 거부하고 처리
        return Promise.reject(error);
      }
    );
    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);
  return <div></div>;
}
