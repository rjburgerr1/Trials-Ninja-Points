const averageNewRunData = async (
    nField,
    fieldToUpdate,
    fieldToUpdatesTotal,
    tableToUpdate,
    whereCondition
) => {
    let updatedValue = Number(fieldToUpdatesTotal) / Number(nField);

    let updatedObj = {};
    updatedObj[fieldToUpdate] = updatedValue;

    await tableToUpdate.update({
        where: whereCondition,
        data: updatedObj,
    });
};

module.exports = averageNewRunData;
