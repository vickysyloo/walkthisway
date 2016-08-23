CarrierWave.configure do |config|
  #Use local storage if in development or test
  if Rails.env.development? || Rails.env.test?
    CarrierWave.configure do |config|
      config.storage = :file
    end
  end

  # Use AWS storage if in production
  if Rails.env.production?
    CarrierWave.configure do |config|
      config.storage = :fog
    end
  end

  config.fog_credentials = {
    :provider               => 'AWS',                             # required
    :aws_access_key_id      => 'Figaro.env.aws_storage_access_key',            # required
    :aws_secret_access_key  => 'Figaro.env.aws_storage_secret_key',     # required
    :region                 => 'us-west-1'                        # optional, defaults to 'us-east-1'
  }
  config.fog_directory  = 'wtw-vtcm'  

end
