const averageNewRunData = async (
    nField,
    fieldToUpdate,
    fieldToUpdatesTotal,
    tableToUpdate,
    whereCondition
) => {
    let updatedValue = Number(fieldToUpdatesTotal) / Number(nField);

    let updatedObj = {};
    updatedObj[fieldToUpdate] = Number(updatedValue);

    await tableToUpdate.update({
        where: whereCondition,
        data: updatedObj,
    });
};

module.exports = averageNewRunData;
