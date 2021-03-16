FROM postgres:10-alpine AS base

FROM base

ADD /sql/ /docker-entrypoint-initdb.d

EXPOSE 5432

ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "postgres" ]