package com.NoCountry.Patrickscoin.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalHandlerException {
    
    @ExceptionHandler(UserException.class)
    public ResponseEntity<?> handlerErrorField(UserException ex, WebRequest req){
        ErrorResponse errorResponse = ErrorResponse.builder()
                                        .status(HttpStatus.BAD_REQUEST.value())
                                        .error(ex.getMessage())
                                        .path(req.getDescription(false))
                                        .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
