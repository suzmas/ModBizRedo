require 'rspec'
require_relative 'task_list'
require_relative 'due_task'

describe "TaskList" do

  it "should instantiate new TaskList object" do
    expect{TaskList.new}.to_not raise_error
  end

  # Create a tlist object for rest of tests
  tlist = TaskList.new

  it "should return a string with Tlist's task objects" do
    expect(tlist.to_s).to be_a String
  end

  it "should add task to task list" do
    t_incomplete = Task.new
    expect{tlist.add_task(t_incomplete)}.to change{tlist.tasks}
  end

  it "should return array of complete or incomplete tasks" do
    # make a completed task
    t_completed = Task.new
    t_completed.complete

    # tlist currently contains one incomplete task obj
    # add one completed task for a total of two task objs
    tlist.add_task(t_completed)

    expect(tlist.get_complete).to be_a Array
    expect((tlist.get_complete).length).to eq(1)
    expect(tlist.get_incomplete).to be_a Array
    expect((tlist.get_incomplete).length).to eq(1)
  end

  it "should return array of incomplete tasks due today" do
    # add incomplete task due today
    t_due = DueTask.new
    t_due.set_due_date("2016-12-01")
    tlist.add_task(t_due)
    # add incomplete task not due today
    t_notdue = DueTask.new
    t_notdue.set_due_date("2018-04-16")
    tlist.add_task(t_notdue)

    expect((tlist.incomplete_due_today).length).to be(1)
  end

  it "should return array of incomplete tasks ordered by due date" do
    due_task1 = DueTask.new
    due_task1.set_due_date("2016-12-02")
    due_task2 = DueTask.new
    due_task2.set_due_date("2018-04-16")

    tlist.add_task(due_task1)
    tlist.add_task(due_task2)

    # tlist object now contains 4 duetask objects
    # create incomplete ordered list var for testing
    incomplete_list = tlist.incomplete_ordered
    expect(incomplete_list.length).to eq(4)
    expect(incomplete_list).to be_a Array
    # test that items are sorted (small to large) correctly by comparing their due dates
    expect((incomplete_list[0]).due_date).to be < ((incomplete_list[1]).due_date)
    expect((incomplete_list[1]).due_date).to be < ((incomplete_list[2]).due_date)
  end

  it "should return array of incomplete tasks beginning with sorted DueTask objects" do
    # tlist currently contains 5 incomplete tasks- 4 of which have due dates
    expect((tlist.sort_both_kinds).length).to eq(5)
    # array indexes 0-3 should be DueTask objects- test index 1
    expect((tlist.sort_both_kinds)[1]).to be_a DueTask
    # last element in array should be the Task object
    expect((tlist.sort_both_kinds)[4]).to be_a Task
  end

end
