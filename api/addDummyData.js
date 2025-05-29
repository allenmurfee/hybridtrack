import { CosmosClient } from "@azure/cosmos";
import { config } from "dotenv";

config();

const endpoint = process.env.COSMOS_ENDPOINT;
const key = process.env.COSMOS_KEY;
const client = new CosmosClient({ endpoint, key });

async function addData() {
  const databaseId = "hybridtrack";
  const containerId = "employees";

  try {
    const database = client.database(databaseId);
    const container = database.container(containerId);
    console.log(`✅ Referenced database: ${database.id}`);
    console.log(`✅ Referenced database: ${container.id}`);

    const dummyPeople = [
      {
        EmployeeId: "1",
        firstName: "Alice",
        lastName: "Jones",
        wfhDays: ["Monday", "Wednesday"],
        email: "alice@test.com",
        role: "Software Engineer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "2",
        firstName: "Bob",
        lastName: "Smith",
        wfhDays: ["Tuesday", "Thursday"],
        email: "bob@test.com",
        role: "Professor",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "3",
        firstName: "Carol",
        lastName: "White",
        wfhDays: ["Monday", "Friday"],
        email: "carol@test.com",
        role: "UX Designer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "4",
        firstName: "David",
        lastName: "Brown",
        wfhDays: ["Wednesday"],
        email: "david@test.com",
        role: "Academic Advisor",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "5",
        firstName: "Eva",
        lastName: "Green",
        wfhDays: ["Tuesday", "Thursday"],
        email: "eva@test.com",
        role: "DevOps Engineer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "6",
        firstName: "Frank",
        lastName: "Black",
        wfhDays: ["Monday"],
        email: "frank@test.com",
        role: "Researcher",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "7",
        firstName: "Grace",
        lastName: "Lee",
        wfhDays: ["Wednesday", "Friday"],
        email: "grace@test.com",
        role: "HR Specialist",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "8",
        firstName: "Henry",
        lastName: "King",
        wfhDays: ["Tuesday"],
        email: "henry@test.com",
        role: "Marketing Manager",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "9",
        firstName: "Ivy",
        lastName: "Scott",
        wfhDays: ["Thursday", "Friday"],
        email: "ivy@test.com",
        role: "Data Scientist",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "10",
        firstName: "Jack",
        lastName: "Adams",
        wfhDays: ["Monday", "Tuesday"],
        email: "jack@test.com",
        role: "Registrar",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "11",
        firstName: "Kate",
        lastName: "Turner",
        wfhDays: ["Wednesday"],
        email: "kate@test.com",
        role: "Software Engineer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "12",
        firstName: "Liam",
        lastName: "Parker",
        wfhDays: ["Thursday"],
        email: "liam@test.com",
        role: "Product Manager",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "13",
        firstName: "Mia",
        lastName: "Phillips",
        wfhDays: ["Friday"],
        email: "mia@test.com",
        role: "UX Designer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "14",
        firstName: "Noah",
        lastName: "Campbell",
        wfhDays: ["Monday", "Thursday"],
        email: "noah@test.com",
        role: "QA Engineer",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "15",
        firstName: "Olivia",
        lastName: "Mitchell",
        wfhDays: ["Tuesday", "Friday"],
        email: "olivia@test.com",
        role: "DevOps Engineer",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "16",
        firstName: "Paul",
        lastName: "Roberts",
        wfhDays: ["Wednesday"],
        email: "paul@test.com",
        role: "Business Analyst",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "17",
        firstName: "Quinn",
        lastName: "Murphy",
        wfhDays: ["Thursday"],
        email: "quinn@test.com",
        role: "Admissions Coordinator",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "18",
        firstName: "Rachel",
        lastName: "Evans",
        wfhDays: ["Monday", "Friday"],
        email: "rachel@test.com",
        role: "Marketing Manager",
        officeLocation: "Midlothian",
      },
      {
        EmployeeId: "19",
        firstName: "Steve",
        lastName: "Ward",
        wfhDays: ["Tuesday"],
        email: "steve@test.com",
        role: "Data Scientist",
        officeLocation: "Chester",
      },
      {
        EmployeeId: "20",
        firstName: "Tina",
        lastName: "Bell",
        wfhDays: ["Wednesday", "Thursday"],
        email: "tina@test.com",
        role: "Sales Lead",
        officeLocation: "Midlothian",
      },
    ];

    for (const emp of dummyPeople) {
      await container.items.create(emp);
    }
  } catch (err) {
    console.error("❌ Error accessing Cosmos DB:", err.message);
  }
}

addData();
