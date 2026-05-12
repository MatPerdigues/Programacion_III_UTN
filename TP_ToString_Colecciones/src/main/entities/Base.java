package main.entities;

import java.time.LocalDateTime;

public abstract class Base {
    protected Long id;
    protected boolean eliminado;
    protected LocalDateTime createdAt;

    public Base(Long id) {
        this.id = id;
        this.eliminado = false;
        this.createdAt = LocalDateTime.now();
    }
}
