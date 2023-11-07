create table posts(
    id bigserial primary key,
    body text not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

create table comments(
    id bigserial primary key,
    post_id bigint not null references posts(id),
    body text not null,
    created_at timestamp with time zone not null default now(),
    updated_at timestamp with time zone not null default now()
);

