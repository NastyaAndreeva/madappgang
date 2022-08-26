function calculateTeamFinanceReport(salaries, team) {
  const totalBudget = Math.round(
    team.reduce((acc, member) => {
      return (
        acc +
        (salaries[member.specialization]
          ? salaries[member.specialization].salary /
            (1 - Number(salaries[member.specialization].tax.slice(0, 2)) / 100)
          : 0)
      );
    }, 0)
  );

  const normalizedKeys = Object.keys(salaries);
  let calculatedSalaryPerDepartment = {};
  for (let key of normalizedKeys) {
    const total = Math.round(
      team.reduce((acc, member) => {
        return (
          acc +
          (member.specialization === key
            ? salaries[member.specialization].salary /
              (1 -
                Number(salaries[member.specialization].tax.slice(0, 2)) / 100)
            : 0)
        );
      }, 0)
    );
    calculatedSalaryPerDepartment = {
      ...calculatedSalaryPerDepartment,
      ...{ ['totalBudget' + key]: total },
    };
  }

  return { totalBudget, ...calculatedSalaryPerDepartment };
}
const salaries1 = {
  Manager: { salary: 1000, tax: '10%' },
  Designer: { salary: 600, tax: '30%' },
  Artist: { salary: 1500, tax: '15%' },
};
const team1 = [
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Max', specialization: 'Designer' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
];
