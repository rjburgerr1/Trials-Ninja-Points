export const formatCreateDate = (createDate: string) => {
    // Create Dates come in the form "YYYY-MM-DDTHH:MM:SS.sssZ"
    // We split by "T" to get only the day of the year
    return createDate.split("T")[0];
};
