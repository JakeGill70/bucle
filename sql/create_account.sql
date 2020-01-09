-- Table: public.account

-- DROP TABLE public.account;

CREATE TABLE public.account
(
    id bigint NOT NULL,
    title text COLLATE pg_catalog."default",
    first_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    role_id bigint NOT NULL,
    created timestamp with time zone NOT NULL DEFAULT now(),
    deleted timestamp with time zone,
    organization_id bigint NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT organization_id_fkey FOREIGN KEY (organization_id)
        REFERENCES public.organization (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT role_id_fkey FOREIGN KEY (role_id)
        REFERENCES public.role (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.account
    OWNER to postgres;