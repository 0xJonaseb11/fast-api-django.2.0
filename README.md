# fast-api-django.2.0

A fast-api django web2.0 application with auth functionalities!!

## Setup Instructions

1. Clone the repository 

```sh 
git clone https://github.com/0xJonaseb11/fast-api-django.2.0.git
```

2. Navigrate to the working directory 
```sh
cd fast-api-django.2.0
```

3. Open the project from the code editor 
```sh
code . 
# or 
atom .
```

4. Create virtual environment 
```sh
python -m venv env
```
5. Activate the virtual environment 
```sh 
# inux/macOS
source venv/bin/activate  

# windows
source env/Scripts/activate
```
6. Install required packages to run the project 

```sh 
pip install -r requirements.txt
```

7. Rename _.env-sample_ to _.env_
8. Fill up the environment variables:
    _Generate your own Secret key using this tool [https://djecrety.ir/](https://djecrety.ir/), copy and paste the secret key in the SECRET_KEY field._

    _Your configuration should look something like this:_

    ```sh
    SECRET_KEY=47d)n05#ei0rg4#)*@fuhc%$5+0n(t%jgxg$)!1pkegsi*l4c%
    DEBUG=True
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_HOST_USER=youremailaddress@gmail.com
    EMAIL_HOST_PASSWORD=yourStrongPassword
    EMAIL_USE_TLS=True
    ```
    _Note: If you are using gmail account, make sure to [use app password](https://support.google.com/accounts/answer/185833)_
    
9. Create database tables

```sh
python manage.py migrate
```

10. Create a super user

```sh
python manage.py createsuperuser
```
    _GitBash users may have to run this to create a super user - `winpty python manage.py createsuperuser`_
    
11. Run server

```sh
python manage.py runserver
```

<!-- 12. Login to admin panel - (`http://127.0.0.1:8000/securelogin/`) -->

12. Add categories, products, add variations, register user, login, place orders and EXPLORE SO MANY FEATURES

### Support
💙 If you like this project, give it a ⭐ and share it with friends!

--------------
@0xJonaseb11