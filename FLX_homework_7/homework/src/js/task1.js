    let login = prompt('Enter your login');
    if(login === '' || login === null){
        alert('Canceled');
    } else if(login.length < 4){
        alert('I don’t know any users having name length less than 4 symbols');
    } else if (login === 'User' || login === 'Admin') {
        let pass = prompt('Enter your password');
    if(pass === '' || pass === null){
        alert('Canceled');
    } else if((login === 'User' && pass === 'UserPass') || (login === 'Admin' && pass === 'RootPass')){
    let date = new Date();
    let hour = date.getHours();
    if(login === 'User' && hour >= 20){
        alert('Good evening, dear User!');
    }else if(login === 'Admin' && hour >= 20){
        alert('Good evening, dear Admin!');
    }else if (login === 'User' && hour < 20) {
        alert('Good day, dear User!');
    }else if (login === 'Admin' && hour < 20) {
        alert('Good day, dear Admin!');
    }
    } else{
        alert('Wrong password');
    }
    } else{
        alert('I don’t know you');
    }

