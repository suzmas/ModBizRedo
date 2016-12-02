require 'rspec'
require_relative 'due_task'

describe "DueTask" do

  it "should create DueTask object" do
    expect{DueTask.new}.to_not raise_error
  end

  due_t = DueTask.new

  it "should return a string with all attributes of a DueTask object" do
    expect(due_t.to_s).to be_a String
  end

  it "should set due date for DueTask object to be a Date class object" do
    expect{due_t.set_due_date("1992-05-02")}.to change{due_t.due_date?}.from(0).to be_a Date
  end

end
