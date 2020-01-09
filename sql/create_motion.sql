-- Table: public.motion

-- DROP TABLE public.motion;

CREATE TABLE public.motion
(
    id bigint NOT NULL,
    item_id bigint NOT NULL,
    motioned_id bigint NOT NULL,
    motioned timestamp with time zone NOT NULL DEFAULT now(),
    second_id bigint,
    seconded timestamp with time zone,
    "requiresVote" boolean,
    content text COLLATE pg_catalog."default",
    CONSTRAINT motion_pkey PRIMARY KEY (id),
    CONSTRAINT item_id_fkey FOREIGN KEY (item_id)
        REFERENCES public.item (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT motioned_user_id_fkey FOREIGN KEY (motioned_id)
        REFERENCES public.account (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT seconded_user_id_fkey FOREIGN KEY (second_id)
        REFERENCES public.account (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public.motion
    OWNER to postgres;