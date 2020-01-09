-- Table: public.agenda

-- DROP TABLE public.agenda;

CREATE TABLE public.agenda
(
    id bigint NOT NULL,
    meeting_id bigint NOT NULL,
    creator_id bigint NOT NULL,
    created timestamp with time zone NOT NULL DEFAULT now(),
    deleted timestamp with time zone,
    finalized timestamp with time zone,
    CONSTRAINT agenda_pkey PRIMARY KEY (id),
    CONSTRAINT meeting_id_fkey FOREIGN KEY (meeting_id)
        REFERENCES public.meeting (id) MATCH SIMPLE
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

ALTER TABLE public.agenda
    OWNER to postgres;