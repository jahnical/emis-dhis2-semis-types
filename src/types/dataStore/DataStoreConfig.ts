import { z } from "zod";
import { staffDataStore } from "./staffSchema";
import { studentDataStore } from "./studentSchema";

// Each dataStore entry is discriminated by `key`, so student and staff configs can diverge independently
export const sectionDataStoreSchema = z.discriminatedUnion("key", [studentDataStore, staffDataStore]);
export const dataStoreSchema = z.array(sectionDataStoreSchema);

export type StudentDataStore = z.infer<typeof studentDataStore>
export type StaffDataStore = z.infer<typeof staffDataStore>
export type SectionDataStore = z.infer<typeof sectionDataStoreSchema>
export type SectionType = SectionDataStore["key"]
export type DataStoreFor<S extends SectionType> = Extract<SectionDataStore, { key: S }>

export type selectedDataStoreKey = SectionDataStore
export type DataStoreProps = z.infer<typeof dataStoreSchema>
