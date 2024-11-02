const employees = [
    {
        "employees": [
            {
                "id": 1,
                "email": "employee1@example.com",
                "password": "123",
                "tasks": [
                    {
                        "title": "Prepare monthly report",
                        "description": "Compile data and prepare the monthly sales report.",
                        "date": "2024-10-25",
                        "category": "Reporting",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Client meeting",
                        "description": "Discuss project requirements with client ABC.",
                        "date": "2024-10-27",
                        "category": "Meeting",
                        "active": false,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Update website",
                        "description": "Implement requested changes on the main website.",
                        "date": "2024-10-30",
                        "category": "Development",
                        "active": false,
                        "newTask": false,
                        "completed": true,
                        "failed": false
                    }
                ]
            },
            {
                "id": 2,
                "email": "employee2@example.com",
                "password": "123",
                "tasks": [
                    {
                        "title": "Inventory check",
                        "description": "Perform quarterly inventory audit.",
                        "date": "2024-10-28",
                        "category": "Audit",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Data backup",
                        "description": "Backup database and server files.",
                        "date": "2024-10-29",
                        "category": "Maintenance",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 3,
                "email": "employee3@example.com",
                "password": "123",
                "tasks": [
                    {
                        "title": "Client follow-up",
                        "description": "Follow up with clients on feedback received.",
                        "date": "2024-10-25",
                        "category": "Communication",
                        "active": false,
                        "newTask": false,
                        "completed": true,
                        "failed": false
                    },
                    {
                        "title": "Budget planning",
                        "description": "Assist in planning the budget for Q4.",
                        "date": "2024-11-02",
                        "category": "Finance",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Training session",
                        "description": "Conduct training for new hires.",
                        "date": "2024-10-26",
                        "category": "HR",
                        "active": false,
                        "newTask": false,
                        "completed": false,
                        "failed": true
                    }
                ]
            },
            {
                "id": 4,
                "email": "employee4@example.com",
                "password": "123",
                "tasks": [
                    {
                        "title": "Product design review",
                        "description": "Review and finalize designs for new product.",
                        "date": "2024-11-01",
                        "category": "Design",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Market research",
                        "description": "Gather data on competitor products.",
                        "date": "2024-10-28",
                        "category": "Research",
                        "active": false,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Team meeting",
                        "description": "Weekly team status meeting.",
                        "date": "2024-10-30",
                        "category": "Meeting",
                        "active": false,
                        "newTask": false,
                        "completed": true,
                        "failed": false
                    },
                    {
                        "title": "Presentation preparation",
                        "description": "Prepare slides for client presentation.",
                        "date": "2024-11-03",
                        "category": "Presentation",
                        "active": true,
                        "newTask": true,
                        "completed": false,
                        "failed": false
                    }
                ]
            },
            {
                "id": 5,
                "email": "employee5@example.com",
                "password": "123",
                "tasks": [
                    {
                        "title": "System update",
                        "description": "Apply security patches to the server.",
                        "date": "2024-10-25",
                        "category": "IT",
                        "active": false,
                        "newTask": true,
                        "completed": false,
                        "failed": true
                    },
                    {
                        "title": "Sales analysis",
                        "description": "Analyze last quarter's sales data.",
                        "date": "2024-10-31",
                        "category": "Analysis",
                        "active": true,
                        "newTask": false,
                        "completed": false,
                        "failed": false
                    },
                    {
                        "title": "Client support",
                        "description": "Assist client with product installation issues.",
                        "date": "2024-10-27",
                        "category": "Support",
                        "active": false,
                        "newTask": false,
                        "completed": true,
                        "failed": false
                    }
                ]
            }
        ]
    }
];


const admin = [
    {
        "admin": {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"
        }
    }

]




export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}