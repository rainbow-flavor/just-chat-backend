package com.rainbowflavor.justchatbackend.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
public class ChatMessage {
    private String content;
    private String sender;
    private LocalDateTime sendDateTime = LocalDateTime.now();
    private MessageType type;

    private enum MessageType{
        CHAT, JOIN, LEAVE
    }
}
