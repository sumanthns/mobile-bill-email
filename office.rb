require "yaml"
class Office
  attr_accessor :name, :vendor

  def initialize(name)
    office_config = YAML.load_file("#{File.dirname(__FILE__)}/config/#{name}.yml")
    @name = name
    @vendor = office_config["vendor"]
  end
end 
