-- Table: public.item

-- DROP TABLE public.item;

CREATE TABLE public.item
(
    id bigint NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    created timestamp with time zone NOT NULL,
    creator_id bigint NOT NULL,
    deleted timestamp with time zone,
    agenda_id bigint NOT NULL,
    CONSTRAINT item_pkey PRIMARY KEY (id),
    CONSTRAINT agenda_id_fkey FOREIGN KEY (agenda_id)
        REFERENCES public.agenda (id) MATCH SIMPLE
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

ALTER TABLE public.item
    OWNER to postgres;