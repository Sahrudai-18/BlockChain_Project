pragma solidity ^0.5.0;

contract Certificates {


    struct Certificate {
        uint256 certificateID;
        uint256 studentID;
        string studentName;
        uint256 dateOfBirth;
        string institutionName;
        uint256 dateOfIssuance;
        string certificateName;
    }

    mapping(uint256 => Certificate) public certificates;
    uint256 public certificateCounter = 1;

    function addCertificate(
        uint256 _studentID,
        string memory _studentName,
        uint256  _dateOfBirth,
        string memory _institutionName,
        uint256  _dateOfIssuance,
        string memory _certificateName
    ) public returns (uint256) {
        uint256 certificateID = certificateCounter;
        certificates[certificateID] = Certificate({
            certificateID: certificateID,
            studentID: _studentID,
            studentName: _studentName,
            dateOfBirth: _dateOfBirth,
            institutionName: _institutionName,
            dateOfIssuance: _dateOfIssuance,
            certificateName: _certificateName
        });
        certificateCounter++;
        return certificateID;
    }

    function getCertificate(
        uint256 _studentID,
        uint256 _certificateID
        )
         public view returns (
        uint256 certificateID,
        uint256 studentID,
        string memory studentName,
        uint256  dateOfBirth,
        string memory institutionName,
        uint256  dateOfIssuance,
        string memory certificateName
    ) {
        Certificate memory certificate = certificates[_certificateID];
        require(certificate.certificateID != 0 && certificate.certificateID == _certificateID, "Certificate not found");
        return (
            certificate.certificateID,
            certificate.studentID,
            certificate.studentName,
            certificate.dateOfBirth,
            certificate.institutionName,
            certificate.dateOfIssuance,
            certificate.certificateName
        );
    }
    

    
}
