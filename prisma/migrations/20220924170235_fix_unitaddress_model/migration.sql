-- DropForeignKey
ALTER TABLE "UnitAddress" DROP CONSTRAINT "UnitAddress_unitid_fkey";

-- AlterTable
ALTER TABLE "UnitAddress" ALTER COLUMN "unitid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UnitAddress" ADD CONSTRAINT "UnitAddress_unitid_fkey" FOREIGN KEY ("unitid") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
