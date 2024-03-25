package com.dango.dango.domain.log.service;

import com.dango.dango.domain.log.dto.LogEditRequest;
import com.dango.dango.domain.log.dto.LogRegisterRequest;
import com.dango.dango.domain.log.entity.Log;

public interface LogService {


    Log findById(Long id);

    Log registerLog(LogRegisterRequest logRegisterRequest);

    Log editLog(LogEditRequest logEditRequest);

    void deleteLog(Long id);
}
