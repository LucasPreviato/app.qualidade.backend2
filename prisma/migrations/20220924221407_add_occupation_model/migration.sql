-- CreateTable
CREATE TABLE "Occupation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "version" SERIAL NOT NULL,
    "daterevision" DATE NOT NULL,
    "alterations" TEXT NOT NULL,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_name_key" ON "Occupation"("name");
