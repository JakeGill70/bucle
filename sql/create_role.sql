-- Table: public.role

-- DROP TABLE public.role;

CREATE TABLE public.role
(
    id bigint NOT NULL,
    organization_id bigint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    permission_json json,
    created time with time zone NOT NULL,
    deleted time with time zone,
    creator_id bigint NOT NULL,
    CONSTRAINT role_pkey PRIMARY KEY (id),
    CONSTRAINT organization_id_fkey FOREIGN KEY (organization_id)
        REFERENCES public.organization (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT user_id_fkey FOREIGN KEY (creator_id)
        REFERENCES public.account (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.role
    OWNER to postgres;