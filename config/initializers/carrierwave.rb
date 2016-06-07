CarrierWave.configure do |config|
  config.fog_credentials = {
      :provider                         => 'Google',
      :google_storage_access_key_id     => Figaro.env.google_storage_access_key,
      :google_storage_secret_access_key => Figaro.env.google_storage_secret_key
      }

      config.fog_directory = 'wtw'
      
end
