import { z } from "zod";

const attendanceStatusOptionSchema = z.object({
    code: z.string(),
    color: z.string().optional(),
    icon: z.string().optional(),
    key: z.string()
});

const attendanceSchema = z.object({
    absenceReason: z.string(),
    lastUpdate: z.string().optional(),
    programStage: z.string(),
    status: z.string(),
    statusOptions: z.array(attendanceStatusOptionSchema)
});

const defaultsSchema = z.object({
    allowSearching: z.boolean(),
    currentAcademicYear: z.string(),
    defaultOrder: z.string().optional()
});

const filterElementSchema = z.object({
    code: z.string(),
    dataElement: z.string(),
    order: z.number()
});

const filtersSchema = z.object({
    dataElements: z.array(filterElementSchema)
});


const registrationSchema = z.object({
    academicYear: z.string(),
    grade: z.string(),
    lastUpdate: z.string(),
    programStage: z.string(),
    section: z.string()
});

const socioEconomicsSchema = z.object({
    programStage: z.string()
});

const transferStatusOptionSchema = z.object({
    code: z.string(),
    key: z.string()
});

const transferSchema = z.object({
    destinySchool: z.string(),
    programStage: z.string(),
    originSchool: z.string(),
    status: z.string(),
    key: z.string().optional(),
    statusOptions: z.array(transferStatusOptionSchema)
});

const finalResultSchema = z.object({
    // Optional for staff: carry-forward works without a status stage
    programStage: z.string().optional(),
    status: z.string().optional(),
    // Statuses that allow re-enrollment / that mark an exit
    validStatusValue: z.array(z.string()).optional(),
    dropoutStatusValues: z.array(z.string()).optional(),
    // Registration data elements that can be changed per staff member when carrying forward
    adjustableFields: z.array(z.string()).optional()
});

const performanceSchema = z.object({
    programStages: z.array(z.object({
        programStage: z.string()
    }))
});

export const staffDataStore = z.object({
    attendance: attendanceSchema,
    defaults: defaultsSchema,
    filters: filtersSchema,
    key: z.literal("staff"),
    "final-result": finalResultSchema.optional(),
    lastUpdate: z.string(),
    performance: performanceSchema.optional(),
    program: z.string(),
    registration: registrationSchema,
    "socio-economics": socioEconomicsSchema,
    trackedEntityType: z.string(),
    transfer: transferSchema,
});