-- CreateTable
CREATE TABLE "UnitAddress" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "complement" TEXT,
    "district" TEXT,
    "city" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "unitid" INTEGER NOT NULL,

    CONSTRAINT "UnitAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UnitAddress_cep_key" ON "UnitAddress"("cep");

-- CreateIndex
CREATE UNIQUE INDEX "UnitAddress_unitid_key" ON "UnitAddress"("unitid");

-- AddForeignKey
ALTER TABLE "UnitAddress" ADD CONSTRAINT "UnitAddress_unitid_fkey" FOREIGN KEY ("unitid") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
