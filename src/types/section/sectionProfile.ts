import { type SectionType } from "../dataStore/DataStoreConfig";

// Behavioural differences between sections. Shared code should read these flags
// instead of comparing sectionType, so each section can change without touching the other.
export interface SectionProfile {
    key: SectionType
    // New enrollments are created from an existing admission record
    enrollFromAdmission: boolean
    // Attendance can only be recorded inside the calendar's class periods, not just the academic year
    attendanceWithinClassPeriods: boolean
    // An enrollment in the same academic year only counts if it is at the selected school
    enrollmentCheckScopedToSchool: boolean
    // Promotion / re-enrollment lets the user pick the destination organisation unit
    promotionChoosesOrgUnit: boolean
    // Promotion skips entities already registered in the target academic year
    promotionSkipsExistingYear: boolean
}

export const sectionProfiles: Record<SectionType, SectionProfile> = {
    student: {
        key: "student",
        enrollFromAdmission: true,
        attendanceWithinClassPeriods: true,
        enrollmentCheckScopedToSchool: false,
        promotionChoosesOrgUnit: false,
        promotionSkipsExistingYear: true,
    },
    staff: {
        key: "staff",
        enrollFromAdmission: false,
        attendanceWithinClassPeriods: false,
        enrollmentCheckScopedToSchool: true,
        promotionChoosesOrgUnit: true,
        promotionSkipsExistingYear: false,
    },
}

export const getSectionProfile = (sectionType?: string | null): SectionProfile =>
    sectionProfiles[sectionType as SectionType] ?? sectionProfiles.student
