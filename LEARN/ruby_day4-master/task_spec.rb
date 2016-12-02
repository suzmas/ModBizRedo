require 'rspec'
require_relative 'task'


describe "Task" do
  it "should instant new Task obj" do
    expect{Task.new}.to_not raise_error
  end

  it "should return string of task features with labels" do
    t = Task.new
    expect(t.to_s).to be_a String
  end

  it "should take user input and create a task" do
    t = Task.new
    expect{t.assign("t", "d")}.to change{t.title}.from("").to("t")
    expect{t.assign("t", "c")}.to change{t.description}.from("d").to("c")
  end

  it "should change task var to completed = true" do
    t = Task.new
    expect{t.complete}.to change{t.completed?}.to(true)
  end

end
