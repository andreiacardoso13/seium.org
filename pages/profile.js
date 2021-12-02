import Dashboard from "/components/moonstone/Dashboard";
import Form from '/components/moonstone/Form';
import Input from '/components/moonstone/Input';
import Link from '/components/Link';
export default function Profile() {
  return (
    <Dashboard href="profile" title="User Profile" description="Hi John, welcome to your profile">
      <div className="grid-cols-2">
        <div>
          <img src="/public/images/sei-logo.svg"/>
          <Form>
              <Input
                  text="NAME"
                  id="name"
                  name="name"
                  bgColor="white"
                  fgColor="black"
              />
              <Input
                  text="USERNAME"
                  id="username"
                  name="username"
                  bgColor="white"
                  fgColor="black"
              />
              <Input
                  text="PASSWORD"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  bgColor="white"
                  fgColor="black"
              />
              <Link href="#" fgColor="aqua">Reset Password</Link>
          </Form>
        </div>

        <div>
        </div>
      </div>
    </Dashboard>
  );
}