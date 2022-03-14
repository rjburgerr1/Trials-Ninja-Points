const averageNewRunData = async (
    nField,
    fieldToUpdate,
    fieldToUpdatesTotal,
    tableToUpdate,
    whereCondition
) => {
    try {
        let updatedValue =
            nField > 0
                ? Number(fieldToUpdatesTotal) / Number(nField)
                : Number(fieldToUpdatesTotal);

        let updatedObj = {};
        updatedObj[fieldToUpdate] = Number(updatedValue);

        await tableToUpdate.update({
            where: whereCondition,
            data: updatedObj,
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = averageNewRunData;
