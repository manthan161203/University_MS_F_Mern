import React from 'react';
import './form.css';

function Student_Form() {
  return (
    <div>
      <div>
        <h1>Student Academic Info Form</h1>
        <form action="/submit" method="POST">
          <div>
            <label for="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            <label for="medium_of_exam">Medium of Exam:</label>
            <input type="text" id="medium_of_exam" name="medium_of_exam" required />
          </div>
          <div>
            <label for="seat_number">Seat Number:</label>
            <input type="text" id="seat_number" name="seat_number" required />
          </div>
          <div>
            <label for="passing_year">Passing Year:</label>
            <input type="text" id="passing_year" name="passing_year" required />
          </div>
          <div>
            <label for="passing_month">Passing Month:</label>
            <input type="text" id="passing_month" name="passing_month" required />
          </div>
          <div>
            <label for="board">Board:</label>
            <input type="text" id="board" name="board" required />
          </div>
          <div>
            <label for="institute_name">Institute Name:</label>
            <input type="text" id="institute_name" name="institute_name" required />
          </div>
          <div>
            <label for="result_type">Result Type:</label>
            <input type="text" id="result_type" name="result_type" required />
          </div>
          <div>
            <label for="result">Result:</label>
            <input type="text" id="result" name="result" required />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>


      <div>
        <h1>Student Contact Info Form</h1>
        <form action="/submit" method="POST">
          <div>
            <label for="student_id">Student ID:</label>
            <input type="text" id="student_id" name="student_id" required />
          </div>
          <div>
            <label for="address_line_1">Address Line 1:</label>
            <input type="text" id="address_line_1" name="address_line_1" required />
          </div>
          <div>
            <label for="address_line_2">Address Line 2:</label>
            <input type="text" id="address_line_2" name="address_line_2" />
          </div>
          <div>
            <label for="address_line_3">Address Line 3:</label>
            <input type="text" id="address_line_3" name="address_line_3" />
          </div>
          <div>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div>
            <label for="state">State:</label>
            <input type="text" id="state" name="state" />
          </div>
          <div>
            <label for="pincode">Pincode:</label>
            <input type="text" id="pincode" name="pincode" required />
          </div>
          <div>
            <label for="country">Country:</label>
            <input type="text" id="country" name="country" required />
          </div>
          <div>
            <label for="mobile_number">Mobile Number:</label>
            <input type="text" id="mobile_number" name="mobile_number" required />
          </div>
          <div>
            <label for="alternate_mobile_number">Alternate Mobile Number:</label>
            <input type="text" id="alternate_mobile_number" name="alternate_mobile_number" />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label for="local_address_line_1">Local Address Line 1:</label>
            <input type="text" id="local_address_line_1" name="local_address_line_1" required />
          </div>
          <div>
            <label for="local_address_line_2">Local Address Line 2:</label>
            <input type="text" id="local_address_line_2" name="local_address_line_2" />
          </div>
          <div>
            <label for="local_address_line_3">Local Address Line 3:</label>
            <input type="text" id="local_address_line_3" name="local_address_line_3" />
          </div>
          <div>
            <label for="local_city">Local City:</label>
            <input type="text" id="local_city" name="local_city" required />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>


      <h1>Student Details Form</h1>
      <form action="/submit" method="POST">
        <div>
          {/* Field for Reporting Date */}
          <label htmlFor="reporting_date">Reporting Date:</label>
          <input type="text" id="reporting_date" name="reporting_date" required />
        </div>
        <div>
          {/* Field for Admission Type */}
          <label htmlFor="admission_type">Admission Type:</label>
          <input type="text" id="admission_type" name="admission_type" required />
        </div>
        <div>
          {/* Field for First Name */}
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" required />
        </div>
        <div>
          {/* Field for Middle Name */}
          <label htmlFor="middle_name">Middle Name:</label>
          <input type="text" id="middle_name" name="middle_name" />
        </div>
        <div>
          {/* Field for Last Name */}
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" required />
        </div>
        <div>
          {/* Field for Name Format */}
          <label htmlFor="name_format">Name Format:</label>
          <input type="text" id="name_format" name="name_format" required />
        </div>
        <div>
          {/* Field for Gender */}
          <label htmlFor="gender">Gender:</label>
          <input type="text" id="gender" name="gender" required />
        </div>
        <div>
          {/* Field for Date of Birth */}
          <label htmlFor="date_of_birth">Date of Birth:</label>
          <input type="text" id="date_of_birth" name="date_of_birth" required />
        </div>
        <div>
          {/* Field for Birth Place */}
          <label htmlFor="birth_place">Birth Place:</label>
          <input type="text" id="birth_place" name="birth_place" required />
        </div>
        <div>
          {/* Field for ACPC Seat Allotment Date */}
          <label htmlFor="ACPC_seat_allotment_date">ACPC Seat Allotment Date:</label>
          <input type="text" id="ACPC_seat_allotment_date" name="ACPC_seat_allotment_date" />
        </div>
        <div>
          {/* Field for isD2D */}
          <label htmlFor="isD2D">Is D2D:</label>
          <input type="checkbox" id="isD2D" name="isD2D" />
        </div>
        <div>
          {/* Field for Enrollment Year */}
          <label htmlFor="enrollment_year">Enrollment Year:</label>
          <input type="text" id="enrollment_year" name="enrollment_year" required />
        </div>
        <div>
          {/* Field for Degree */}
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" name="degree" required />
        </div>
        <div>
          {/* Field for Qualifying Exam Roll Number */}
          <label htmlFor="qualifying_exam_roll_number">Qualifying Exam Roll Number:</label>
          <input type="text" id="qualifying_exam_roll_number" name="qualifying_exam_roll_number" required />
        </div>
        <div>
          {/* Field for Session Number */}
          <label htmlFor="session_number">Session Number:</label>
          <input type="number" id="session_number" name="session_number" required />
        </div>
        <div>
          {/* Field for Batch Year */}
          <label htmlFor="batch_year">Batch Year:</label>
          <input type="text" id="batch_year" name="batch_year" required />
        </div>
        <div>
          {/* Field for Student ID */}
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          {/* Field for Old Student ID */}
          <label htmlFor="old_student_id">Old Student ID:</label>
          <input type="text" id="old_student_id" name="old_student_id" />
        </div>
        <div>
          {/* Field for Merit Rank */}
          <label htmlFor="merit_rank">Merit Rank:</label>
          <input type="text" id="merit_rank" name="merit_rank" required />
        </div>
        <div>
          {/* Field for Cast Category */}
          <label htmlFor="cast_category">Cast Category:</label>
          <input type="text" id="cast_category" name="cast_category" required />
        </div>
        <div>
          {/* Field for Student Email */}
          <label htmlFor="student_email">Student Email:</label>
          <input type="email" id="student_email" name="student_email" required />
        </div>
        <div>
          {/* Field for Student Roll Number */}
          <label htmlFor="student_roll_number">Student Roll Number:</label>
          <input type="text" id="student_roll_number" name="student_roll_number" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <h1>Student Guardian Info Form</h1>
      <form action="/submit" method="POST">
        <div>
          {/* Field for Student ID */}
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          {/* Field for Father's Name */}
          <label htmlFor="father_name">Father's Name:</label>
          <input type="text" id="father_name" name="father_name" required />
        </div>
        <div>
          {/* Field for Father's Occupation */}
          <label htmlFor="father_occupation">Father's Occupation:</label>
          <input type="text" id="father_occupation" name="father_occupation" />
        </div>
        <div>
          {/* Field for Organization Name */}
          <label htmlFor="organization_name">Organization Name:</label>
          <input type="text" id="organization_name" name="organization_name" />
        </div>
        <div>
          {/* Field for Annual Income */}
          <label htmlFor="annual_income">Annual Income:</label>
          <input type="text" id="annual_income" name="annual_income" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <h1>Student Fees Info Form</h1>
      <form action="/submit" method="POST">
        <div>
          {/* Field for Student ID */}
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          {/* Field for Transaction Date */}
          <label htmlFor="txn_date">Transaction Date:</label>
          <input type="text" id="txn_date" name="txn_date" required />
        </div>
        <div>
          {/* Field for Voucher Number */}
          <label htmlFor="voucher_number">Voucher Number:</label>
          <input type="text" id="voucher_number" name="voucher_number" required />
        </div>
        <div>
          {/* Field for Batch Year */}
          <label htmlFor="batch_year">Batch Year:</label>
          <input type="text" id="batch_year" name="batch_year" required />
        </div>
        <div>
          {/* Field for Session Number */}
          <label htmlFor="session_no">Session Number:</label>
          <input type="number" id="session_no" name="session_no" required />
        </div>
        <div>
          {/* Field for Admission Type */}
          <label htmlFor="admission_type">Admission Type:</label>
          <input type="text" id="admission_type" name="admission_type" required />
        </div>
        <div>
          {/* Field for Fees Amount */}
          <label htmlFor="fees_amount">Fees Amount:</label>
          <input type="number" id="fees_amount" name="fees_amount" required />
        </div>
        <div>
          {/* Field for Transaction Status */}
          <label htmlFor="txn_status">Transaction Status:</label>
          <input type="text" id="txn_status" name="txn_status" required />
        </div>
        <div>
          {/* Field for Payment Mode */}
          <label htmlFor="payment_mode">Payment Mode:</label>
          <input type="text" id="payment_mode" name="payment_mode" required />
        </div>
        <div>
          {/* Field for Cheque Number */}
          <label htmlFor="cheque_number">Cheque Number:</label>
          <input type="text" id="cheque_number" name="cheque_number" />
        </div>
        <div>
          {/* Field for Cheque Date */}
          <label htmlFor="cheque_date">Cheque Date:</label>
          <input type="text" id="cheque_date" name="cheque_date" />
        </div>
        <div>
          {/* Field for Bank Name */}
          <label htmlFor="bank_name">Bank Name:</label>
          <input type="text" id="bank_name" name="bank_name" />
        </div>
        <div>
          {/* Field for Paid Date */}
          <label htmlFor="paid_date">Paid Date:</label>
          <input type="text" id="paid_date" name="paid_date" required />
        </div>
        <div>
          {/* Field for Reconcile Date */}
          <label htmlFor="reconsile_date">Reconcile Date:</label>
          <input type="text" id="reconsile_date" name="reconsile_date" />
        </div>
        <div>
          {/* Field for Reconcile Number */}
          <label htmlFor="reconsile_number">Reconcile Number:</label>
          <input type="text" id="reconsile_number" name="reconsile_number" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <h1>Student Other Details Form</h1>
      <form action="/submit" method="POST">
        <div>
          {/* Field for Student ID */}
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          {/* Field for Sub Cast */}
          <label htmlFor="sub_cast">Sub Cast:</label>
          <input type="text" id="sub_cast" name="sub_cast" />
        </div>
        <div>
          {/* Field for Marital Status */}
          <label htmlFor="marital_status">Marital Status:</label>
          <input type="text" id="marital_status" name="marital_status" />
        </div>
        <div>
          {/* Field for Mother Tongue */}
          <label htmlFor="mother_tongue">Mother Tongue:</label>
          <input type="text" id="mother_tongue" name="mother_tongue" />
        </div>
        <div>
          {/* Field for Nationality */}
          <label htmlFor="nationality">Nationality:</label>
          <input type="text" id="nationality" name="nationality" />
        </div>
        <div>
          {/* Field for Blood Group */}
          <label htmlFor="blood_group">Blood Group:</label>
          <input type="text" id="blood_group" name="blood_group" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <h1>Student Exam Result Form</h1>
      <form action="/submit" method="POST">
        <div>
          <label htmlFor="student_id">Student ID:</label>
          <input type="text" id="student_id" name="student_id" required />
        </div>
        <div>
          <label htmlFor="semester">Semester:</label>
          <input type="number" id="semester" name="semester" required />
        </div>
        <div>
          <label htmlFor="batch_year">Batch Year:</label>
          <input type="number" id="batch_year" name="batch_year" required />
        </div>
        <div>
          <label htmlFor="subject_code">Subject Code:</label>
          <input type="text" id="subject_code" name="subject_code" required />
        </div>
        <div>
          <label htmlFor="subject_name">Subject Name:</label>
          <input type="text" id="subject_name" name="subject_name" required />
        </div>
        <div>
          <label htmlFor="sessional1_marks">Sessional 1 Marks:</label>
          <input type="number" id="sessional1_marks" name="sessional1_marks" required />
        </div>
        <div>
          <label htmlFor="sessional2_marks">Sessional 2 Marks:</label>
          <input type="number" id="sessional2_marks" name="sessional2_marks" required />
        </div>
        <div>
          <label htmlFor="sessional3_marks">Sessional 3 Marks:</label>
          <input type="number" id="sessional3_marks" name="sessional3_marks" required />
        </div>
        <div>
          <label htmlFor="sessional1_present">Sessional 1 Present:</label>
          <input type="text" id="sessional1_present" name="sessional1_present" required />
        </div>
        <div>
          <label htmlFor="sessional2_present">Sessional 2 Present:</label>
          <input type="text" id="sessional2_present" name="sessional2_present" required />
        </div>
        <div>
          <label htmlFor="sessional3_present">Sessional 3 Present:</label>
          <input type="text" id="sessional3_present" name="sessional3_present" required />
        </div>
        <div>
          <label htmlFor="sessional1_attendance">Sessional 1 Attendance:</label>
          <input type="number" id="sessional1_attendance" name="sessional1_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_attendance">Sessional 2 Attendance:</label>
          <input type="number" id="sessional2_attendance" name="sessional2_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_attendance">Sessional 3 Attendance:</label>
          <input type="number" id="sessional3_attendance" name="sessional3_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_total_attendance">Sessional 1 Total Attendance:</label>
          <input type="number" id="sessional1_total_attendance" name="sessional1_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_total_attendance">Sessional 2 Total Attendance:</label>
          <input type="number" id="sessional2_total_attendance" name="sessional2_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_total_attendance">Sessional 3 Total Attendance:</label>
          <input type="number" id="sessional3_total_attendance" name="sessional3_total_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_practical_attendance">Sessional 1 Practical Attendance:</label>
          <input type="number" id="sessional1_practical_attendance" name="sessional1_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_practical_attendance">Sessional 2 Practical Attendance:</label>
          <input type="number" id="sessional2_practical_attendance" name="sessional2_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_practical_attendance">Sessional 3 Practical Attendance:</label>
          <input type="number" id="sessional3_practical_attendance" name="sessional3_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional1_total_practical_attendance">Sessional 1 Total Practical Attendance:</label>
          <input type="number" id="sessional1_total_practical_attendance" name="sessional1_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional2_total_practical_attendance">Sessional 2 Total Practical Attendance:</label>
          <input type="number" id="sessional2_total_practical_attendance" name="sessional2_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="sessional3_total_practical_attendance">Sessional 3 Total Practical Attendance:</label>
          <input type="number" id="sessional3_total_practical_attendance" name="sessional3_total_practical_attendance" required />
        </div>
        <div>
          <label htmlFor="block_marks">Block Marks:</label>
          <input type="number" id="block_marks" name="block_marks" required />
        </div>
        <div>
          <label htmlFor="block_present">Block Present:</label>
          <input type="text" id="block_present" name="block_present" required />
        </div>
        <div>
          <label htmlFor="external_marks">External Marks:</label>
          <input type="number" id="external_marks" name="external_marks" required />
        </div>
        <div>
          <label htmlFor="external_status">External Status:</label>
          <input type="text" id="external_status" name="external_status" required />
        </div>
        <div>
          <label htmlFor="avg_sessional_marks">Average Sessional Marks:</label>
          <input type="number" id="avg_sessional_marks" name="avg_sessional_marks" required />
        </div>
        <div>
          <label htmlFor="sessional_status">Sessional Status:</label>
          <input type="text" id="sessional_status" name="sessional_status" required />
        </div>
        <div>
          <label htmlFor="avg_practical_marks">Average Practical Marks:</label>
          <input type="number" id="avg_practical_marks" name="avg_practical_marks" required />
        </div>
        <div>
          <label htmlFor="practical_status">Practical Status:</label>
          <input type="text" id="practical_status" name="practical_status" required />
        </div>
        <div>
          <label htmlFor="termwork_marks">Termwork Marks:</label>
          <input type="number" id="termwork_marks" name="termwork_marks" required />
        </div>
        <div>
          <label htmlFor="termwork_status">Termwork Status:</label>
          <input type="text" id="termwork_status" name="termwork_status" required />
        </div>
        <div>
          <label htmlFor="total_marks">Total Marks:</label>
          <input type="number" id="total_marks" name="total_marks" required />
        </div>
        <div>
          <label htmlFor="max_total_marks">Max Total Marks:</label>
          <input type="number" id="max_total_marks" name="max_total_marks" required />
        </div>
        <div>
          <label htmlFor="subject_points">Subject Points:</label>
          <input type="number" id="subject_points" name="subject_points" required />
        </div>
        <div>
          <label htmlFor="subject_grade">Subject Grade:</label>
          <input type="text" id="subject_grade" name="subject_grade" required />
        </div>
        <div>
          <label htmlFor="subject_credit">Subject Credit:</label>
          <input type="number" id="subject_credit" name="subject_credit" required />
        </div>
        <div>
          <label htmlFor="subject_status">Subject Status:</label>
          <input type="text" id="subject_status" name="subject_status" required />
        </div>
        <div>
          <label htmlFor="spi_credit">SPI Credit:</label>
          <input type="number" id="spi_credit" name="spi_credit" required />
        </div>
        <div>
          <label htmlFor="spi_points">SPI Points:</label>
          <input type="number" id="spi_points" name="spi_points" required />
        </div>
        <div>
          <label htmlFor="spi">SPI:</label>
          <input type="number" id="spi" name="spi" required />
        </div>
        <div>
          <label htmlFor="cpi_credit">CPI Credit:</label>
          <input type="number" id="cpi_credit" name="cpi_credit" required />
        </div>
        <div>
          <label htmlFor="cpi_points">CPI Points:</label>
          <input type="number" id="cpi_points" name="cpi_points" required />
        </div>
        <div>
          <label htmlFor="cpi">CPI:</label>
          <input type="number" id="cpi" name="cpi" required />
        </div>
        <div>
          <label htmlFor="result_status">Result Status:</label>
          <input type="text" id="result_status" name="result_status" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Student_Form