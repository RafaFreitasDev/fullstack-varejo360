package com.varejo360.backend.exception;

import org.springframework.context.MessageSource;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.List;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    private final MessageSource messages;

    public GlobalExceptionHandler(MessageSource messages) {
        this.messages = messages;
    }

//    @Override
//    protected ResponseEntity<Object> handleMethodArgumentNotValid(final MethodArgumentNotValidException ex, final HttpHeaders headers, final HttpStatusCode status, final WebRequest request) {
//
//        final HashMap<String, HashMap<String, String>> returnObject = new HashMap<>();
//        final HashMap<String, String> allErrorsObject = new HashMap<>();
//
//        final List<ObjectError> allErrorsList = ex.getAllErrors();
//
//        allErrorsList.forEach(error -> {
//            if (error instanceof FieldError) {
//                allErrorsObject.put(((FieldError) error).getField(), error.getDefaultMessage());
//            } else {
//                allErrorsObject.put(error.getObjectName(), error.getDefaultMessage());
//            }
//        });
//
//        returnObject.put("message", allErrorsObject);
//
//        return new ResponseEntity<>(returnObject, HttpStatus.BAD_REQUEST);
//
//    }
//
//
//
//    //tratar AppException
//    @ExceptionHandler({AppException.class})
//    public ResponseEntity<Object> handleAppException(final AppException ex) {
//
//        final HashMap<String, String> returnObject = new HashMap<>();
//        returnObject.put("message", ex.getMessage());
//
//        System.out.println(ex.getMessage());
//
//        return  new ResponseEntity<>(returnObject, ex.getStatusCode());
//    }
//
//    //exceção padão do java (RuntimeException)
//    @ExceptionHandler({Exception.class})
//    public ResponseEntity<Object> handleInternal(final RuntimeException ex) {
//
//        final HashMap<String, String> returnObject = new HashMap<>();
//        returnObject.put("message", "Internal Server Error");
//
//        System.out.println(ex.getMessage());
//
//        return  new ResponseEntity<>(returnObject, HttpStatus.INTERNAL_SERVER_ERROR);
//    }
//
//    @ExceptionHandler(DataIntegrityViolationException.class)
//    public ResponseEntity<Object> handleForeignKeyViolation(DataIntegrityViolationException ex) {
//        final HashMap<String, String> returnObject = new HashMap<>();
//        String message = "The operation could not be completed due to a database integrity constraint.";
//
//        // Verificar a causa raiz para fornecer uma mensagem mais específica
//        if (ex.getCause() != null && ex.getCause().getCause() != null) {
//            Throwable rootCause = ex.getCause().getCause();
//            if (rootCause.getMessage().contains("violates foreign key constraint")) {
//                message = "It is not possible to update or delete the record: it is being referenced by another table.";
//            }
//        }
//
//        returnObject.put("message", message);
//
//        // Log da exceção para fins de depuração
//        System.out.println(ex.getMessage());
//
//        return new ResponseEntity<>(returnObject, HttpStatus.CONFLICT);
//    }

}
