package com.passionpursuit.exceptionhandler;

public class FailToDeleteException extends RuntimeException {
    public FailToDeleteException(String message) {
        super(message);
    }
}
