-- AlterTable
CREATE SEQUENCE "occupation_version_seq";
ALTER TABLE "Occupation" ALTER COLUMN "version" SET DEFAULT nextval('occupation_version_seq');
ALTER SEQUENCE "occupation_version_seq" OWNED BY "Occupation"."version";
