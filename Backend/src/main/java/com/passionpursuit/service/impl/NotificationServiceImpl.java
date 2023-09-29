package com.passionpursuit.service.impl;

import lombok.Value;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.passionpursuit.entities.UserEntity;
import com.passionpursuit.service.NotificationService;

import java.text.SimpleDateFormat;
import java.util.Calendar;

@Service
public class NotificationServiceImpl implements NotificationService {
    private final JavaMailSender javaMailSender;

    
    @Autowired
    public NotificationServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendNotification(UserEntity userEntity) {
        SimpleMailMessage mail = new SimpleMailMessage();
        String mailBody = "http://localhost:3000/password/" + userEntity.getId();
        mail.setTo(userEntity.getEmail());
        mail.setFrom("aniketgadage@gmail.com");
        mail.setSubject("Change your password");
        mail.setText("Click the link to reset your password: " + mailBody);
        System.out.println(mail+" "+mail.getSubject()+" "+mail.getFrom()+" "+mail.getReplyTo());
        javaMailSender.send(mail);
    }
}
