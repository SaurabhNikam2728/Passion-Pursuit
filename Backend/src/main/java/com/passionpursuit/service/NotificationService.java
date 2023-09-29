package com.passionpursuit.service;

import org.springframework.scheduling.annotation.Async;

import com.passionpursuit.entities.AppClient;
import com.passionpursuit.entities.UserEntity;

public interface NotificationService {
    @Async
    void sendNotification(UserEntity userEntity);
}
