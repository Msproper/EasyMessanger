package com.easygame.easygame.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthDto {
    @NotNull
    private String login;
    @NotNull
    private String password;
}