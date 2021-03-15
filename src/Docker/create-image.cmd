docker build --no-cache -f SQL\Dockerfile.PostgreSql -t primer/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t primer/app ../..
