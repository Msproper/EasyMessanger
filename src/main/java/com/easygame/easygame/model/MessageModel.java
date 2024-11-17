package com.easygame.easygame.model;

import com.easygame.easygame.model.MessageStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Getter
@Setter
@Table(name = "Messages")
public class MessageModel {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "message_id_seq")
    @SequenceGenerator(name = "message_id_seq", sequenceName = "message_id_seq", allocationSize = 1)
    private String id;

    @ManyToOne
    @JoinColumn(name = "chatId", nullable = false)
    private ChatModel chat;

    @Column(name = "senderId", nullable = false)
    private String senderId;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "timestamp", nullable = false)
    private Date timestamp;

    @Column(name = "status", nullable = false)
    private MessageStatus status;


}