def calculate_attendance():
    min_attendance = int(input('Enter the minimum attendance required: '))
    total_classes = int(input('Enter the total number of classes: '))
    classes_attended = int(input('Enter the number of classes attended: '))

    if total_classes < 0 or classes_attended < 0 or min_attendance < 0 or min_attendance > 100 or classes_attended > total_classes:
        print('Please enter proper values.')
        return

    if total_classes < classes_attended:
        print('The number of classes attended cannot be greater than the total number of classes.')
        return

    attendance = (classes_attended / total_classes) * 100
    classes_can_be_bunked = int((classes_attended - (min_attendance / 100) * total_classes))
    classes_absent = total_classes - classes_attended

    print('Attendance:', format(attendance, '.2f'), '%')
    print('Classes that can be bunked:', max(0, classes_can_be_bunked))
    print('Classes Absent:', classes_absent)

calculate_attendance()
