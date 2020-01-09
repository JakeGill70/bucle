-- Table: public.organization

-- DROP TABLE public.organization;

CREATE TABLE public.organization
(
    id bigint NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone NOT NULL DEFAULT now(),
    creator bigint,
    city text COLLATE pg_catalog."default",
    state text COLLATE pg_catalog."default",
    country text COLLATE pg_catalog."default",
    deleted timestamp with time zone,
    is_public boolean,
    CONSTRAINT organization_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.organization
    OWNER to postgres;