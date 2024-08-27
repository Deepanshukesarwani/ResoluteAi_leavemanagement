interface LeaveType {
    credited: number;
    remaining: number;
    used: number;
  }
  
  interface User {
    year: number;
    types: {
      AnnualLeave: LeaveType;
      Study: LeaveType;
      Health: LeaveType;
      Family: LeaveType;
      Paternity: LeaveType;
      Maternity: LeaveType;
      Unpaid: LeaveType;
    };
  }
  
  const AdminUser: User[] = [
    {
      year: 2024,
      types: {
        AnnualLeave: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Study: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Health: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Family: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Paternity: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Maternity: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
        Unpaid: {
          credited: 30,
          remaining: 13,
          used: 17,
        },
      },
    },
  ];
  
  export {AdminUser}