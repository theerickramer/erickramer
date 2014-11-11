require 'bundler/setup'
Bundler.require(:default)

get '/' do
  File.read('./index.html')
end

post '/email-me' do
  email_me(params[:name], params[:email], params[:subject], params[:text])
end

def email_me(name, email, subject, text)
  email_info = {
  from: "#{name}<#{email}>",
  to: "theerickramer@gmail.com",
  subject: "#{subject}",
  text: "#{text}"
  }

  url = "https://api.mailgun.net/v2/erickramer.co"
  auth = {:username=>"api", :password=>"key-f2a898a08a5fcef31a6f2e5cecce779d"}

  HTTParty.post(url, {body: email_info, basic_auth: auth})
end