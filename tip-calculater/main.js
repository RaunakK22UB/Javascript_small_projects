const GenerateBillButton = document.querySelector('.generate-bill');
const BillAmount = document.querySelector('.bill-amount');
const discount = document.querySelector('.discount-percentage');
const TipPercentage = document.querySelector('.tip-percentage');
const NumberOfCustomer = document.querySelector('.no-of-customer-percentage')
const TotalTippaid = document.querySelector('.total-tip-paid');
const TotalamountToPay = document.querySelector('.total-amount-to-pay');
const eachPersonToPay = document.querySelector('.Each-amount');

const TotalTipPercentageValue = document.querySelector('.tip-value');
const TotaldiscountPercentageValue = document.querySelector('.discount-value');
const TotalcustomerPercentageValue = document.querySelector('.Number-of-customer');



function calculateBill(){
   console.log(BillAmount.value ,discount.value,TipPercentage.value,NumberOfCustomer.value);

   const BillAmountAfterDiscount = BillAmount.value - ((BillAmount.value * discount.value)/100);

   const Tip = BillAmountAfterDiscount * (TipPercentage.value/100);

   const TotalBillAmount = BillAmountAfterDiscount + Tip;

   const EachCustomerToPay = TotalBillAmount / NumberOfCustomer.value ;
   

   eachPersonToPay.textContent = EachCustomerToPay;
   TotalTippaid.textContent = Tip;
   TotalamountToPay.textContent = TotalBillAmount;
   TotalTipPercentageValue.textContent=TipPercentage.value;
   TotaldiscountPercentageValue.textContent=discount.value;
   TotalcustomerPercentageValue.textContent=NumberOfCustomer.value;



}
GenerateBillButton.addEventListener('click',calculateBill);
