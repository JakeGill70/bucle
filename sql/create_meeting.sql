-- Table: public.meeting

-- DROP TABLE public.meeting;

CREATE TABLE public.meeting
(
    id bigint NOT NULL,
    organization_id bigint NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone NOT NULL DEFAULT now(),
    start_time timestamp with time zone NOT NULL,
    creator_id bigint NOT NULL,
    end_time time with time zone,
    attendance bigint[],
    CONSTRAINT meeting_pkey PRIMARY KEY (id),
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

ALTER TABLE public.meeting
    OWNER to postgres;