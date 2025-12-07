let Expense_name=document.getElementById('name');
let Expense_price=document.getElementById('price');
let Expense_category=document.getElementById('category');
let Expense_date=document.getElementById('date');
let ExpenseContianer;

if(localStorage.getItem('Expenses') == null){
    ExpenseContianer=[];
}else{
    ExpenseContianer=JSON.parse(localStorage.getItem('Expenses'));
tableExpense();
}

function displayExprenses(){
    if(!Expense_name.value === "" || Expense_date.value === "" || Expense_category.value === "" || Expense_price.value === ""){
        window.alert('a7aaaa');
        return;
    }
    let Expense={
        name:Expense_name.value,
        price:Expense_price.value,
        category:Expense_category.value,
        date:Expense_date.value
    }
    ExpenseContianer.push(Expense);
    localStorage.setItem('Expenses',JSON.stringify(ExpenseContianer));
    clareForm();
    tableExpense();
}
    console.log(ExpenseContianer);

function clareForm(){
    Expense_name.value=""
    Expense_price.value=""
    Expense_category.value=""
    Expense_date.value=""
}

function tableExpense(){
    let cartona=``;
    for(let i=0 ; i<ExpenseContianer.length ; i++){
        cartona +=`
        <tr>
                <td>`+ExpenseContianer[i].name+`</td>
                <td>جنيه`+ExpenseContianer[i].price+`</td>
                <td>`+ExpenseContianer[i].category+`</td>
                <td>`+ExpenseContianer[i].date+`</td>
                <td><button onclick="deleteExprense(`+i+`)" class="btn btn-outline-danger">Delete</button></td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML=cartona;
}

function deleteExprense(i){
    ExpenseContianer.splice(i,1);
    localStorage.setItem('Expenses',JSON.stringify(ExpenseContianer));
    tableExpense();
}
