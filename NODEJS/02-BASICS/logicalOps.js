// && - AND operator - Both Sides need to be true
// || - OR Operator - Either one of the side needs to be true

let isVerified = true; 
let isLoggedIN = true;
let hasPaymentToken = true;
let isGuest = true;

if(isVerifiedfied && isLoggedIN && hasPaymentToken){
    console.log('Greeting message to user');
    console.log('Grant access to paid course');
}else if (isVerifiedfied || isGuest){
    console.log('Allow free previews');
}else{
    console.log('MESSAGE : please contact admin');
}