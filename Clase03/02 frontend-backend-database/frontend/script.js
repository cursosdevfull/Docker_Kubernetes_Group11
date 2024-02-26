const tbody = document.querySelector("tbody");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const btnAddCustomer = document.querySelector("button");

function showCustomers(customers) {
  let rows = "";

  customers.forEach(
    (customer) =>
      (rows += `<tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
    </tr>`)
  );

  tbody.innerHTML = rows;
}

function clearInputs() {
  inputName.value = "";
  inputEmail.value = "";
}

function fetchListCustomers() {
  fetch("http://localhost:5000/select")
    .then((res) => res.json())
    .then(showCustomers);
}

const addCustomer = () => {
  const name = inputName.value;
  const email = inputEmail.value;

  fetch("http://localhost:5000/insert", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then(() => {
    fetchListCustomers();
    clearInputs();
  });
};

btnAddCustomer.addEventListener("click", addCustomer);

fetchListCustomers();
