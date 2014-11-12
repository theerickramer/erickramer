require 'bundler/setup'
Bundler.require(:default)

get '/' do
  File.read('./index.html')
end

post '/contact' do
  content_type :json
  contact = email_me(params[:name], params[:email], params[:subject], params[:text])
  contact.to_json
end

def email_me(name, email, subject, text)
  email_info = {
  from: "robobliss@gmail.com",
  to: "theerickramer@gmail.com",
  subject: "#{subject}",
  text: "From #{name}<#{email}>: #{text}"
  }

  url = "https://api.mailgun.net/v2/erickramer.co/messages"
  auth = {:username=>"api", :password=>"key-f2a898a08a5fcef31a6f2e5cecce779d"}

  HTTParty.post(url, {body: email_info, basic_auth: auth})
end